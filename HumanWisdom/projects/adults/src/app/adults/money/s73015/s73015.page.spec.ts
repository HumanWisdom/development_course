import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73015Page } from './s73015.page';

describe('S73015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73015Page;
  let fixture: ComponentFixture<S73015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
