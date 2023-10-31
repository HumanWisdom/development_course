import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73032Page } from './s73032.page';

describe('S73032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73032Page;
  let fixture: ComponentFixture<S73032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
