import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141074Page } from './s141074.page';

describe('S141074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141074Page;
  let fixture: ComponentFixture<S141074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
