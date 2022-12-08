import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53126Page } from './s53126.page';

describe('S53126Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53126Page;
  let fixture: ComponentFixture<S53126Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53126Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53126Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
