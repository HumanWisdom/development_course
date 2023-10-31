import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53170Page } from './s53170.page';

describe('S53170Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53170Page;
  let fixture: ComponentFixture<S53170Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53170Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53170Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
