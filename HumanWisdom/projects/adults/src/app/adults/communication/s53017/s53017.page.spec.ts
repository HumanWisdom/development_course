import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53017Page } from './s53017.page';

describe('S53017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53017Page;
  let fixture: ComponentFixture<S53017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
