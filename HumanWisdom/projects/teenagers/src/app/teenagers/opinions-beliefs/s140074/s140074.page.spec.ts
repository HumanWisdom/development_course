import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140074Page } from './s140074.page';

describe('S140074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140074Page;
  let fixture: ComponentFixture<S140074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
