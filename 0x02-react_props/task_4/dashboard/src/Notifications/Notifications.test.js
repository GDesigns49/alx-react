import React from 'react'
import Notifications from './Notifications'
import { shallow } from 'enzyme'

let notify;
describe('Notifications component testing', () => {

    beforeEach(() => {
        notify = shallow(<Notifications />)
    });

    it('renders without crashing', () => {
        expect(notify).toBeDefined();
    });
    it('renders three list items', () => {
        notify.setProps({displayDrawer: true});
        expect(notify.find('NotificationItem')).toHaveLength(3);
    });
    it('renders the text Here is the list of notifications', () => {
        notify.setProps({displayDrawer:true})
        expect(notify.contains(<p>Here is the list of notifications</p>)).toEqual(true);
    });
    it("verify that the first NotificationItem element renders the right html", () => {
        notify.setProps({displayDrawer:true})
        expect(notify.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">New course available</li>');
    });
    it("menu item is being displayed when displayDrawer is false", () => {
    expect(notify.find('.menuItem')).toHaveLength(1);
    });

    it("div.Notifications is not being displayed when displayDrawer is false", () => {
    expect(notify.find('.Notifications')).toHaveLength(0);
    });
});

describe("Testing <Notification displayDrawer={true}/> ", () => {

    beforeEach(() => {
      notify = shallow(<Notifications displayDrawer={true}/>);
    });
  
    it("menu item is being displayed when displayDrawer is true", () => {
      expect(notify.find('.menuItem')).toHaveLength(1);
    });
  
    it("div.Notifications is being displayed when displayDrawer is true", () => {
      expect(notify.find('.Notifications')).toHaveLength(1);
    });
    
  });