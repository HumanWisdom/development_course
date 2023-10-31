import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61086tPage } from './s61086t.page';

describe('S61086tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61086tPage;
  let fixture: ComponentFixture<S61086tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61086tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61086tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
