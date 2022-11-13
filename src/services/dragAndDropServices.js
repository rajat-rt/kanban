/**
 * These services are added to perform
 * drag and drop Functionality
 */

export const allowDrop = (ev) => {
    ev.preventDefault();
}
  
export const drag = (ev, cardInfo) => {
    ev.dataTransfer.setData("text",JSON.stringify(cardInfo));
}
  
export const drop = (ev) => {
    ev.preventDefault();
    const destLaneId = ev.target.offsetParent.id;
    var srcData = JSON.parse(ev.dataTransfer.getData("text"));
    const srcLaneId = srcData.LaneId;
    return ({ srcData, destLaneId});
}