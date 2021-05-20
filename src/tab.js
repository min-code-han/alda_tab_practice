import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Content from "./content";

import useStyles from "./style/tabStyle";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component='a'
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.tabAppBar}>
        <Tabs
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          aria-label='nav tabs example'
          className={classes.indicator}
        >
          <LinkTab
            label='신용 올리기'
            href='/drafts'
            {...a11yProps(0)}
            disableRipple
          />
          <LinkTab
            label='대출 이자 줄이기'
            href='/trash'
            {...a11yProps(1)}
            disableRipple
          />
          <LinkTab
            label='맞춤 대출 찾기'
            href='/spam'
            {...a11yProps(2)}
            disableRipple
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Content
          tab='one'
          title='신용 올리기'
          sub1='클릭 한 번으로'
          sub2='하루 만에 신용점수 올리기'
          notice='true'
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Content
          tab='two'
          title='대출 이자 줄이기'
          sub1='매일 부담스러운 대출이자'
          sub2='금리인하요구권으로 줄일수 있어요'
          notice='false'
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Content
          tab='three'
          title='맞춤 대출 찾기'
          sub1='내 대풀금리가 가장 맞은 곳은?'
          sub2=''
          notice='false'
        />
      </TabPanel>
    </div>
  );
}
