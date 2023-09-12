import StatBox from "../../components/StatBox";

function Index() {
  return (
    <div className="flex flex-col px-6">
        <StatBox title={"title"} subtitle="sub" 
        icon={"<div>icon</div>"} 
        progress={0.5}
        increase={40}
        />
        <StatBox title={"title"} subtitle="sub" 
        icon={"<div>icon</div>"} 
        progress={0.5}
        increase={40}
        />
    </div>
  )
}

export default Index;
