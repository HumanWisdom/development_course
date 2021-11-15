import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55001Page } from './s55001.page';

describe('S55001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55001Page;
  let fixture: ComponentFixture<S55001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
