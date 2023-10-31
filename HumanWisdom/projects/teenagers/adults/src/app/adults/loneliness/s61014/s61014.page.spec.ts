import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61014Page } from './s61014.page';

describe('S61014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61014Page;
  let fixture: ComponentFixture<S61014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
