function fix_dpi(can){
    let dpi = window.devicePixelRatio;
    let style_height = +getComputedStyle(can).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(can).getPropertyValue("width").slice(0, -2);

    can.setAttribute('height', 600);
    can.setAttribute('width', 800);
    height = can.getAttribute('height')
    width = can.getAttribute('width')
    
 }
