import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73059Page } from './s73059.page';

describe('S73059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73059Page;
  let fixture: ComponentFixture<S73059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
