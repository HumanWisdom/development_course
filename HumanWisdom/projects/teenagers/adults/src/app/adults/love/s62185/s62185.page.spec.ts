import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62185Page } from './s62185.page';

describe('S62185Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62185Page;
  let fixture: ComponentFixture<S62185Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62185Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62185Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
