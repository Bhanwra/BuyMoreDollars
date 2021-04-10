import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"

const History = (props) => {

    const [getHistory, setHistory] = useState([])

    useEffect(() => {
        fetchHistory(props.user.id)
    }, [])

    const fetchHistory = (userId) => {
        axios.post(process.env.REACT_APP_API_PATH + 'game/history', {
            userId: userId
        }).then(response => {
            if ( !response.data.error ) {
                setHistory(response.data.history)
            }
        }).catch(err => {
            console.error(err)
        })
    }

    const renderHistory = (history) => {
        return Object.keys(history).map(index => {

            let timeTillPayout = (Date.now() > new Date(history[index].payout_on)) ? 0 : Math.abs((new Date(history[index].payout_on) - Date.now())/1000)

            let payout = ''
            if ( timeTillPayout == 0 ) {
                payout = <FontAwesomeIcon className="text-green-700" icon={faCheck}/>
            } else {
                let secondsTillPayout = Math.floor(timeTillPayout % 60)
                let minutesTillPayout = Math.floor((timeTillPayout / 60) % 60)
                let hoursTillPayout = Math.floor((timeTillPayout / (60*60)) % 60)
                payout = `~${(hoursTillPayout > 0) ? hoursTillPayout + 'h' : ''} ${(minutesTillPayout > 0) ? minutesTillPayout + 'm' : ''} ${secondsTillPayout}s`
            }

            return (
                <div className="grid grid-cols-7 border items-center">
                    <div className="col-span-1 text-right p-2 px-4">{Number(index)+1}</div>
                    <div className="col-span-2 text-left p-2 px-4 font-semibold">BM$ {history[index].amount}</div>
                    <div className="col-span-2 text-center p-2 px-4">{payout}</div>
                    <div className="col-span-2 text-center p-2 px-4 text-sm font-bold">{new Date(history[index].started_on).toLocaleString("en-US")}</div>
                </div>
            )
        })
    }

    return (
        <div className="flex flex-col p-4">
            <div>
                <span className="text-lg font-semibold text-center block mb-4">Payout History</span>
            </div>
            <div className="mb-4 shadow-md">
                <div className="grid grid-cols-7 border items-center">
                    <div className="col-span-1 text-right p-2 px-4 text-sm font-bold bg-gray-100">#</div>
                    <div className="col-span-2 text-left p-2 px-4 text-sm font-bold bg-gray-100">Amount</div>
                    <div className="col-span-2 text-center p-2 px-4 text-sm font-bold bg-gray-100">Payout On</div>
                    <div className="col-span-2 text-center p-2 px-4 text-sm font-bold bg-gray-100">Played On</div>
                </div>
                {renderHistory(getHistory)}
            </div>
            <button className="shadow-md" onClick={() => {fetchHistory(props.user.id)}}>Reload Payouts</button>
        </div>
    )
}

export default History