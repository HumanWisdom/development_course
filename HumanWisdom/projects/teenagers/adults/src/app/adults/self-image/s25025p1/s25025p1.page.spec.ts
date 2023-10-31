import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25025p1Page } from './s25025p1.page';

describe('S25025p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25025p1Page;
  let fixture: ComponentFixture<S25025p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25025p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25025p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
