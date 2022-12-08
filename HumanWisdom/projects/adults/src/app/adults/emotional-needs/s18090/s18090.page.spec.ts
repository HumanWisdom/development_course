import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18090Page } from './s18090.page';

describe('S18090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18090Page;
  let fixture: ComponentFixture<S18090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
