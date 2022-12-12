import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55058Page } from './s55058.page';

describe('S55058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55058Page;
  let fixture: ComponentFixture<S55058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
