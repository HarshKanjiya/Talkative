import swal from "sweetalert";

export const PopUp = ({text='', icon='success', hasButton=false, timer='1500', title = ''}) => {

  swal({
    text,
    title,
    icon,
    buttons:hasButton,
    timer,
  })

  
}
