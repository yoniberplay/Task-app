let element;


/**
 * No retorna nada solo establece la cantidad en el elemento indicado por parametro
 * @param {HTMLElement} elementid Elemento al cual se le asignare la cantidad
 * @param {number} cantidad A asignar
 * 
 */
export const RenderPending = ( elementid,cantidad ) => {

    if(!element) element = document.querySelector(elementid);
    if(!element) throw new Error(`El elemento ${elementid} no existe en el DOM.`);

    element.textContent = cantidad;

}