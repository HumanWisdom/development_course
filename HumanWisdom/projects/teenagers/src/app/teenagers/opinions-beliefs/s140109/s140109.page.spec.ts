import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140109Page } from './s140109.page';

describe('S140109Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140109Page;
  let fixture: ComponentFixture<S140109Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140109Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140109Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
