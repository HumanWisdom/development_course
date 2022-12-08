import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18032Page } from './s18032.page';

describe('S18032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18032Page;
  let fixture: ComponentFixture<S18032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
