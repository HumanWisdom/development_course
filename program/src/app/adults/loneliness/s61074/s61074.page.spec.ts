import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61074Page } from './s61074.page';

describe('S61074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61074Page;
  let fixture: ComponentFixture<S61074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
