import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48086Page } from './s48086.page';

describe('S48086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48086Page;
  let fixture: ComponentFixture<S48086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
