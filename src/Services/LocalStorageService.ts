
export function handleLocalStorage(name: string, action: string, value?: any){
  if (action === 'get') {
    let data;
    localStorage.hasOwnProperty(name) 
      ? data = JSON.parse(localStorage.getItem(name)) 
      : data = [];
    return data;
  } else if(action === 'update') {
    localStorage.setItem(name, JSON.stringify(value));
  } else {
    localStorage.removeItem(name);
  }
}
