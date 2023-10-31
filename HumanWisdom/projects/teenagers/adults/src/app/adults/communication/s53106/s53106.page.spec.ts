import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53106Page } from './s53106.page';

describe('S53106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53106Page;
  let fixture: ComponentFixture<S53106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
