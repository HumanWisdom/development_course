import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64034Page } from './s64034.page';

describe('S64034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64034Page;
  let fixture: ComponentFixture<S64034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
