import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73055Page } from './s73055.page';

describe('S73055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73055Page;
  let fixture: ComponentFixture<S73055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
