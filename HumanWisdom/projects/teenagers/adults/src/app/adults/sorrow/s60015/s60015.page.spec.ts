import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60015Page } from './s60015.page';

describe('S60015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60015Page;
  let fixture: ComponentFixture<S60015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
