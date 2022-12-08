import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55055Page } from './s55055.page';

describe('S55055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55055Page;
  let fixture: ComponentFixture<S55055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
