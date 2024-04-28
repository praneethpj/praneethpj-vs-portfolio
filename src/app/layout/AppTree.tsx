import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { VscArchive, VscExclude, VscFile, VscJson, VscMarkdown } from "react-icons/vsc";
import { fontSize } from "@mui/system";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

interface Page {
  index: number;
  name: string;
  route: string;
  icon:string;
}

interface Props {
  pages: {
    index: number;
    name: string;
    route: string;
    icon:string;
  }[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  currentComponent: string;
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
  visiblePageIndexs: number[];
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function AppTree({
  pages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) {
  const navigate = useNavigate();
  const theme = useTheme();
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  let { pathname } = useLocation();

  const page: Page = pages.find((x) => x.route === pathname)!;

  useEffect(() => {
    if (page) {
      setSelectedIndex(page.index);
    }
  }, [page, setSelectedIndex]);

  function renderTreeItemBgColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index ? "rgba(144,202,249,0.16)" : "#252527";
    } else {
      return selectedIndex === index ? "#295fbf" : "#f3f3f3";
    }
  }

  function renderTreeItemColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index && currentComponent === "tree"
        ? "white"
        : "#bdc3cf";
    } else {
      return selectedIndex === index ? "#e2ffff" : "#69665f";
    }
  }

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ minWidth: 220 }}
      defaultExpanded={["-1"]}

      // sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem
         
        nodeId="-1"
        label={<span style={{ fontSize: '15px' }}>praneethpj.github.io</span>}

        color="#bdc3cf"
        onClick={() => {
          navigate("/");
          setSelectedIndex(-1);
        }}
      >
        {pages.map(({ index, name, route,icon }) => (
          <TreeItem
            key={index}
            nodeId={index.toString()}
            label={name}
            sx={{
              color: renderTreeItemColor(index),
              backgroundColor: renderTreeItemBgColor(index),
              "&& .Mui-selected": {
                backgroundColor: renderTreeItemBgColor(index),
              },
            }}
            icon={icon=="html"?<FaHtml5 color="#be4d25" />:icon=="jsx"?<FaReact color="#61dbfb" />:icon=="js"?<FaJs color="#e6e600"/>:icon=="css"?<FaCss3 color="#be4d25" />:icon=="json"?<VscJson color="#E74DFF"/>:icon=="edu"?<VscExclude />:icon=="arch"?<VscArchive color="#FFCC4D"/>:<VscFile color="#6997d5" />} 
            onClick={() => {
              if (!visiblePageIndexs.includes(index)) {
                const newIndexs = [...visiblePageIndexs, index];
                setVisiblePageIndexs(newIndexs);
              }
              navigate(route);
              setSelectedIndex(index);
              setCurrentComponent("tree");
            }}
          />
        ))}
      </TreeItem>
    </TreeView>
  );
}
