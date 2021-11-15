import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73036Page } from './s73036.page';

describe('S73036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73036Page;
  let fixture: ComponentFixture<S73036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
