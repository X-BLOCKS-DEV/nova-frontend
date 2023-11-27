import { useEffect, useState } from "react";
import { managerClient } from "../../http/axios";

function Index() {
  const [uptime, setUptime] = useState(0);
  const [info, setInfo] = useState({
    id: '',
    version: ''
  });

  useEffect(() => {
    managerClient.get('/v1/uptime').then((res) => {
        setUptime(res.data.seconds)
    });
    managerClient.get('/v1/info').then((res) => {
        setInfo(res.data)
    });
  }, []);

  const parseSeconds = (sec: number) => {
    var tmp = sec
    const d = Math.floor(tmp / 60 / 60 / 24)
    tmp = tmp % (24 * 60 * 60)
    const h = Math.floor(tmp / 60 / 60)
    tmp = tmp % (60 * 60)
    const m = Math.floor(tmp / 60)
    tmp = tmp % 60
    const s = tmp % 60
    return `${d} 日 ${h} 時間 ${m} 分 ${s} 秒`
  }

  const reboot = () => {
    managerClient.post("/v1/reboot").then(() => {
        alert("約10秒後に再起動されます。しばらくした後に再度リロードしてください")
    })
  }
  const shutdown = () => {
    managerClient.post("/v1/shutdown").then(() => {
        alert("シャットダウンがリクエストされました。約10秒間後に安全に電源を抜き差しすることが可能になります。")
    })
  }
  return (
    <div className="flex flex-col px-6">
        <div className="p-3 bg-slate-100 rounded">
            <h2 className="text-xl font-semibold">本体情報</h2>
            <div className="p-4 flex">
                <p>製品番号</p>
                <div className="grow" />
                <p className="">{info.id}</p>
            </div>
            <div className="p-4 flex">
                <p>ソフトウェアバージョン</p>
                <div className="grow" />
                <p className="">{info.version}</p>
            </div>
            <div className="p-4 flex">
                <p>稼働状態</p>
                <div className="grow" />
                <p className="text-green-500">稼働中</p>
            </div>
            <div className="p-4 flex">
                <p>連続起動時間</p>
                <div className="grow" />
                <p className="">{parseSeconds(uptime)}</p>
            </div>
        </div>
        <div className="p-3 mt-4 bg-slate-100 rounded">
            <h2 className="text-xl font-semibold">メンテナンス</h2>
            <div className="p-4 flex">
                <p>本体のシャットダウンを行います</p>
                <div className="grow" />
                <button className="p-2 border-2 rounded" onClick={shutdown}>シャットダウン</button>
            </div>
            <div className="p-4 flex">
                <p>本体の再起動を行います</p>
                <div className="grow" />
                <button className="p-2 border-2 rounded" onClick={reboot}>再起動</button>
            </div>
        </div>
        <hr className="m-4 h-px"/>
        <div className="p-2 mt-4 rounded text-sm text-slate-500">
            <p>何か不具合が起きた際には以下までご連絡ください</p>
            <p>maintenance@b-c-lab.co.jp</p>
        </div>
    </div>
  )
}

export default Index;
