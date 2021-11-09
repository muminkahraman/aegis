// ** Navigation sections imports
import apps from './apps'
import pages from './pages'
import forms from './forms'
import tables from './tables'
import others from './others'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import chartsAndMaps from './charts-maps'
import aegisvertical from "./aegisvertical"

// ** Merge & Export
export default [...dashboards, ...aegisvertical, ...apps, ...pages, ...uiElements, ...forms, ...tables, ...chartsAndMaps, ...others]
