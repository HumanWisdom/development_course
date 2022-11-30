import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48018Page } from './s48018.page';

describe('S48018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48018Page;
  let fixture: ComponentFixture<S48018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
