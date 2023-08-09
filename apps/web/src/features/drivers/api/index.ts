export async function fetchDriversApi() {
  return fetch("https://ergast.com/api/f1/2023/drivers.json").then((res) =>
    res.json()
  );
}

export async function fetchDriverApi(driverId: string) {
  return fetch(`https://ergast.com/api/f1/2023/drivers/${driverId}.json`).then(
    (res) => res.json()
  );
}
