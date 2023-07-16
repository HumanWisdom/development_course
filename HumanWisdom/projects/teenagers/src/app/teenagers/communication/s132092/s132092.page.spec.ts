import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132092Page } from './s132092.page';

describe('S132092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132092Page;
  let fixture: ComponentFixture<S132092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
