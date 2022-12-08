import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57074Page } from './s57074.page';

describe('S57074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57074Page;
  let fixture: ComponentFixture<S57074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
