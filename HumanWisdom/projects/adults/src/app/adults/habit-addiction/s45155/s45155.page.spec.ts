import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45155Page } from './s45155.page';

describe('S45155Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45155Page;
  let fixture: ComponentFixture<S45155Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45155Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45155Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
