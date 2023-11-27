interface NodeInfoProps {
    info: NodeInfo,
    uptime: number
}

interface NodeInfo {
    id: string,
    version: string
}

function NodeInfo(props: NodeInfoProps) {
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
  const info = props.info;
  const uptime = props.uptime;

  return (
    <div>
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
  );
}

export default NodeInfo;