import { crimeApiURL } from "./apiURL";
import dayjs from "dayjs";
import { crimeMap } from "../config/selectOptions";

async function fetchCrime({ timeRange, type }) {
  const begin = dayjs(timeRange[0]).toJSON().slice(0, -1);
  const end = dayjs(timeRange[1]).toJSON().slice(0, -1);
  const crmCD = crimeMap[type];

  const whereClause = `$where=date_occ between '${begin}' and '${end}'${
    crmCD ? ` AND crm_cd='${crmCD}'` : ""
  }`;

  const requestURL = `${crimeApiURL}?${whereClause}`;

  const response = await fetch(requestURL);
  return await response.json();
}

export default fetchCrime;
