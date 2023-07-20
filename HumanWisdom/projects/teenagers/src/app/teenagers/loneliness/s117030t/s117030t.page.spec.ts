import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117030tPage } from './s117030t.page';

describe('S117030tPage', () => {
  // let   
    let component:  S117030tPage;
  let fixture: ComponentFixture<S117030tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117030tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117030tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
