import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64014Page } from './s64014.page';

describe('S64014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64014Page;
  let fixture: ComponentFixture<S64014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
