import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132084Page } from './s132084.page';

describe('S132084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132084Page;
  let fixture: ComponentFixture<S132084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
