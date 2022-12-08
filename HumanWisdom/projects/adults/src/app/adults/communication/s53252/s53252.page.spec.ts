import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53252Page } from './s53252.page';

describe('S53252Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53252Page;
  let fixture: ComponentFixture<S53252Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53252Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53252Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
