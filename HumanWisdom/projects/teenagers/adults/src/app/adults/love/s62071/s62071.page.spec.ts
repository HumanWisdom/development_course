import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62071Page } from './s62071.page';

describe('S62071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62071Page;
  let fixture: ComponentFixture<S62071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
