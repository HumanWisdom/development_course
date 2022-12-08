import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53213Page } from './s53213.page';

describe('S53213Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53213Page;
  let fixture: ComponentFixture<S53213Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53213Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53213Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
