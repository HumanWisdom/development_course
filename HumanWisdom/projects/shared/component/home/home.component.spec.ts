import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default navigation items', () => {
    expect(component.navigationItems.length).toBe(4);
    expect(component.navigationItems[1].isActive).toBe(true); // Mental wellbeing should be active
  });

  it('should have default content sections', () => {
    expect(component.contentSections.length).toBe(2);
    expect(component.contentSections[0].title).toBe('Begin here');
    expect(component.contentSections[1].title).toBe('Feel better now');
  });

  it('should toggle section expansion', () => {
    const section = component.contentSections[0];
    const initialState = section.isExpanded;
    
    component.onSectionToggle(section);
    
    expect(section.isExpanded).toBe(!initialState);
  });

  it('should change active navigation item', () => {
    const newActiveItem = component.navigationItems[0];
    
    component.onNavigationClick(newActiveItem);
    
    expect(newActiveItem.isActive).toBe(true);
    expect(component.navigationItems[1].isActive).toBe(false);
  });

  it('should emit card click event', () => {
    const card = component.contentSections[0].cards[0];
    spyOn(component.cardClick, 'emit');
    
    component.onCardClick(card);
    
    expect(component.cardClick.emit).toHaveBeenCalledWith(card);
  });


});
