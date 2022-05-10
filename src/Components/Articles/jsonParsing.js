
const Json=(props)=>{
    const json=props.article.selftext;
    JSON.parse(json);
    return (
    <p>{json}</p>)
}

export default Json;


